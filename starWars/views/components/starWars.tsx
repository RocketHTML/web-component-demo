import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'star-wars',
  shadow: true
})
export class StarWars {
  @Intent('starWars') fetcher: BearerFetch
  render() {
    return <bearer-scrollable fetcher={this.fetcher} />
  }
}