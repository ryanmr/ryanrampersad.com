import React from 'react'

import { TopSection } from '../components/home/TopSection'
import { Bio } from '../components/home/Bio'
import { Work } from '../components/home/Work'
import { RelatedLinks } from '../components/home/RelatedLinks'
import { ReferralLinks } from '../components/home/ReferralLinks'

class HomepagePage extends React.Component {
  render() {
    return (
      <div>
        <TopSection />
        <Bio />
        <Work />
        <RelatedLinks />
        <ReferralLinks />
      </div>
    )
  }
}

export default HomepagePage
