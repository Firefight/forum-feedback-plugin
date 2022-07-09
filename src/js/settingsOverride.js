import { extend } from 'flarum/common/extend'
import SettingsPage from 'flarum/forum/components/SettingsPage'
import Component from 'flarum/common/Component'
import listItems from 'flarum/common/helpers/listItems'
import Modal from 'flarum/common/components/Modal';

class VerificationCodeModal extends Modal {
  // True by default, dictates whether the modal can be dismissed by clicking on the background or in the top right corner.
  static isDismissible = true;

  className() {
    // Custom CSS classes to apply to the modal
    return 'verificationCodeModal';
  }

  title() {
    // Content to show in the modal's title bar
    return <p>Generated Code</p>;
  }

  content() {
    // Content to show in the modal's body
    return <section>
        <p>
            Your code is {` ${this.attrs.code} `}, use the command 
            <b><code>{` ${app.forum.attribute('bindCommand')} ${this.attrs.code} `}</code></b> within
            the next {` ${Math.floor(app.forum.attribute('VerificationCodeTimeout') / (1000 * 60))} `}
            minutes to bind your Minecraft accond to the Forums.</p>
    </section>;
  }
}

class KeyGenerator extends Component {
    view() {
        return (
            <li>
              <legend>Bind Minecraft account to Firefight Forums</legend>
              <p>
                To bind your Minecraft account to the Firefight Forums, press
                the button to obtain a code that will last for
                <b>
                {` ${Math.floor(app.forum.attribute('VerificationCodeTimeout') / (1000 * 60))} `}
                </b>
                minutes that you can then submit on the firefight minecraft
                server using the
                <b>
                    <code>
                        {` ${app.forum.attribute('bindCommand')} `}
                    </code>
                </b>
                command
              </p>
              <button className="Button" onclick={this.onClick}>Bind Account</button>
            </li>
        )
    }

    onClick() {
        app.request({
          method: "POST",
          url: "/api/generateUUIDAuthToken"
        }).then(response => {
          app.modal.show(VerificationCodeModal, { code: response.code })
        })
    }
}

class BoundAccounts extends Component {
  view() {
    return (
      <li>
        <legend>Bound Minecraft Accounts</legend>
        <p>TODO: Table of minecraft accounts with remove option</p>
      </li>
    )
  }
}

extend(SettingsPage.prototype, 'settingsItems', function(items) {
    items
        .add('keyGenerator', <KeyGenerator />)
        .add('boundAccounts', <BoundAccounts />)
})
