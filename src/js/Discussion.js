import DiscussionListItem from 'flarum/forum/components/DiscussionListItem'
import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import avatar from 'flarum/common/helpers/avatar';
import listItems from 'flarum/common/helpers/listItems';
import highlight from 'flarum/common/helpers/highlight';
import icon from 'flarum/common/helpers/icon';
import humanTime from 'flarum/common/utils/humanTime';
import ItemList from 'flarum/common/utils/ItemList';
import abbreviateNumber from 'flarum/common/utils/abbreviateNumber';
import Dropdown from 'flarum/common/components/Dropdown';
import TerminalPost from 'flarum/TerminalPost';
import SubtreeRetainer from 'flarum/common/utils/SubtreeRetainer';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import slidable from 'flarum/utils/slidable';
import classList from 'flarum/common/utils/classList';
import DiscussionPage from 'flarum/common/components/DiscussionPage';
import escapeRegExp from 'flarum/common/utils/escapeRegExp';
import Tooltip from 'flarum/common/components/Tooltip';

DiscussionListItem.prototype.view = function() {
  const discussion = this.attrs.discussion;
  const reportData = this.attrs.discussion.data.attributes.report_data;
  const user = discussion.user();
  const isUnread = discussion.isUnread();
  const isRead = discussion.isRead();

  let jumpTo = 0;
  const controls = DiscussionControls.controls(discussion, this).toArray();
  const attrs = this.elementAttrs();

  if (this.attrs.params.q) {
    const post = discussion.mostRelevantPost();
    if (post) {
      jumpTo = post.number();
    }

    const phrase = escapeRegExp(this.attrs.params.q);
    this.highlightRegExp = new RegExp(phrase + '|' + phrase.trim().replace(/\s+/g, '|'), 'gi');
  } else {
    jumpTo = Math.min(discussion.lastPostNumber(), (discussion.lastReadPostNumber() || 0) + 1);
  }

  const isThin = (this.element?.clientWidth ?? 830) < 820;

  if (reportData === undefined || isThin) {
    return (
      <div {...attrs}>
        {controls.length > 0 &&
         Dropdown.component(
           {
             icon: 'fas fa-ellipsis-v',
             className: 'DiscussionListItem-controls',
             buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
             accessibleToggleLabel: app.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label'),
           },
           controls
         )}

        <span
          className={'Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic' + (isUnread ? '' : ' disabled')}
          onclick={this.markAsRead.bind(this)}
        >
          {icon('fas fa-check')}
        </span>

        <div className={classList('DiscussionListItem-content', 'Slidable-content', { unread: isUnread, read: isRead })}>
          <Tooltip
            text={app.translator.trans('core.forum.discussion_list.started_text', { user, ago: humanTime(discussion.createdAt()) })}
            position="right"
          >
            <Link className="DiscussionListItem-author" href={user ? app.route.user(user) : '#'}>
              {avatar(user, { title: '' })}
            </Link>
          </Tooltip>

          <ul className="DiscussionListItem-badges badges">{listItems(discussion.badges().toArray())}</ul>

          <Link href={app.route.discussion(discussion, jumpTo)} className="DiscussionListItem-main">
            <h3 className="DiscussionListItem-title">{highlight(discussion.title(), this.highlightRegExp)}</h3>
            hi
            <ul className="DiscussionListItem-info">{listItems(this.infoItems().toArray())}</ul>
          </Link>
          {this.replyCountItem()}
        </div>
      </div>
    );
  } else {
    let discussionColor = 'green'

    switch (reportData.mood) {
      case 1:
        discussionColor = 'amber'
        break
      case 2:
        discussionColor = 'red'
        break
    }


    return (
      <div {...attrs} className={
        [
          'DiscussionListWithReport',
          `DiscussionListSidebar-${discussionColor}`
        ].join(' ')
      }>
        <div>


          <div className={classList('DiscussionListItem-content', 'Slidable-content', { unread: isUnread, read: isRead })}>
            <Tooltip
              text={app.translator.trans('core.forum.discussion_list.started_text', { user, ago: humanTime(discussion.createdAt()) })}
              position="right"
            >
              <img width={70} height={70} src={`https://visage.surgeplay.com/head/${reportData.uuid}`}/>
            </Tooltip>
            <div>
              <div>
                {listItems(this.infoItems().toArray()[0])}
                {this.replyCountItem()}
              </div>
              <div>
                <Link href={app.route.discussion(discussion, jumpTo)} classList="DiscussionListItem-main">
                  <h3 class="DiscussionListItem-title">{highlight(discussion.title(), this.highlightRegExp)}</h3>
                </Link>
                <div className="overlay"></div>
              </div>
            </div>
            {controls.length > 0 &&
              Dropdown.component(
                {
                  icon: 'fas fa-ellipsis-v',
                  className: 'DiscussionListItem-controls',
                  buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
                  accessibleToggleLabel: app.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label'),
                },
                controls
              )
            }
          </div>
          <ul className="DiscussionListItem-info">
            {listItems(this.infoItems().toArray()[1])}
          </ul>
        </div>
        <img widht={466} height={145} src={reportData.image_url}/>
      </div>
    );
  }
}
