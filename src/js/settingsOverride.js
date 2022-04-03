import { extend } from 'flarum/common/extend'
import SettingsPage from 'flarum/forum/components/SettingsPage'
import Component from 'flarum/common/Component'

class KeyGenerator extends Component {
    view() {
        return (
            <li>
              <legend>Bind Minecraft account to Firefight Forums</legend>
              <p>
                To bind your Minecraft account to the Firefight Forums, press
                the button to obtain a code that will last for
                <b>
                {` ${app.forum.attribute('authCodeTimeout')} `}
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
              <button className="Button">Bind Account</button>
            </li>
        )
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
