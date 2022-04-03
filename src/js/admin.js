import { extend, override } from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

function routes() {
  return (
    <>
      <h2>API Endpoints:</h2>
      <div className="Form-group">
        <label>Bind Minecraft Account to Flarum User: <code>/bindUser</code></label>
        <p>Schema:</p>
        <pre>
          {
            `{
    uuid: string, // User's minecraft UUID
    code: string, // User's autentication code
}`
          }
        </pre>
      </div>
      <div className="Form-group">
        <label>Submit Feedback: <code>/submitFeedback</code></label>
        <p>Schema:</p>
        <pre>
          {
            `{
    // Schema still to be discussed
    uuid: string, // User's minecraft UUID
    title: string, // Feedback Title
    message: string, // Feedback Message
}`
          }
        </pre>
      </div>
      <h2>Settings:</h2>
    </>
  )
}

app.initializers.add('feedback-plugin', function(app) {
  app.extensionData
     .for('firefight-feedback-plugin')
     .registerSetting(routes)
     .registerSetting({
       setting: 'firefight-feedback-plugin.bot_id',
       label: 'Bot User ID',
       type: 'number'
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.verification_code_type',
       label: 'Verification Code Type',
       options: {
         N: 'Numbers Only',
         AN: 'Alpha Numeric',
       },
       type: 'select'
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.verification_code_timeout',
       label: 'Validation Code Timeout',
       type: 'number'
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.bind_command',
       label: 'Minecraft command to bind Minecraft to Flarum User',
       type: 'string'
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.feedback_slug',
       label: 'Slug for feedback Primary Tag',
       type: 'string',
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.feature_feedback_slug',
       label: 'Slug for feature feedback Secondary Tag',
       type: 'string',
     })
     .registerSetting({
       setting: 'firefight-feedback-plugin.general_feedback_slug',
       label: 'Slug for general feedback Secondary Tag',
       type: 'string'
     })
})
