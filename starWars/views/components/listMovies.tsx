import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'list-movies',
  shadow: true
})
export class ListMovies {
  @Intent('listMovies') fetcher: BearerFetch
  render() {
    return <bearer-scrollable fetcher={this.fetcher} />
  }
}