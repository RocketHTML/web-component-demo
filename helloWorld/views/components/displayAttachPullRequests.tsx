import { Component } from '@bearer/core'

@Component({
  tag: 'display-attach-pull-requests',
  styleUrl: 'displayAttachPullRequests.css',
  shadow: true
})
export class DisplayAttachPullRequests {
  render() {
    return (
      <div class="root">
        <bearer-typography as="h2">
          DisplayAttachPullRequests Component
        </bearer-typography>
      </div>
    )
  }
}
