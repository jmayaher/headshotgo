import React, { useCallback } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Button from "../components/Button"

import {
  PricingCards,
  PricingCard,
  PricingInfo,
} from "../PageComponents/Pricing/PricingCard"
import { LocationInfo } from "../PageComponents/Pricing/LocationInfo"
import Checkmark from "../PageComponents/Pricing/checkmark.svg"

export default function Pricing({ data }) {
  const renderPrices = useCallback(() => {
    return data.allPricesJson.edges.map(
      ({ node: { color, price, packageName, packageDetails, psRetouch } }) => (
        <PricingCard color={color} key={packageName}>
          <div className="Main">
            <h1>{packageName}</h1>
            <p>starting at</p>
            <p className="Price">
              <div>
                <sup>$</sup>
                <span>{price}</span>
                <sup>*</sup>
              </div>
            </p>
            <a
              className="BookNowLink"
              href={data.site.siteMetadata.bookingLink}
            >
              <Button
                bgColor={"#fff"}
                color={"var(--color-primary)"}
                aria-label="Book Now"
                big="true"
              >
                Book Now
              </Button>
            </a>
          </div>
          <PricingInfo>
            {packageDetails.map((detailString, index) => (
              <p
                key={index}
                style={{
                  fontWeight: detailString.includes("business")
                    ? "700"
                    : "normal",
                }}
              >
                <Checkmark />
                {detailString}
              </p>
            ))}
            {psRetouch && <p className="psRetouch">Photoshop skin retouch</p>}
          </PricingInfo>
        </PricingCard>
      )
    )
  }, [
    //data.site.siteMetadata.bookingLink,
    data.allPricesJson.edges,
    data.site.siteMetadata.phone,
  ])
  return (
    <div>
      <SEO title="Our Prices" />
      <PricingCards>
        {renderPrices()}
        <p className="LocationComment">
          *Location of Choice (price varies)
          <br />
          See pricing below
        </p>
      </PricingCards>
      <LocationInfo>
        <h1>Location Prices</h1>
        <ol>
          <li>
            If the location is <strong>1-5 miles</strong> from Mid City, Los
            Angeles then you will <strong>NOT</strong> be charged a
            transportation fee.
          </li>
          <li>
            If the location is <strong>6-10 miles</strong> from Mid City, Los
            Angeles then you will be charged <strong>$0.50/mile</strong>.
            <p>bring 1 friend to the shoot to opt out of this fee</p>
          </li>
          <li>
            If the location is <strong>11-30 miles</strong> from Mid City, Los
            Angeles then you will be charged <strong>$0.75/mile</strong>.
            <p>bring 2 friends to the shoot to opt out of this fee.</p>
          </li>
          <li>
            If the location is <strong>31-50 miles</strong> from Mid City, Los
            Angeles then you will be charged <strong>$1.00/mile</strong>.
            <p>bring 3+ friends to the shoot to opt out of this fee</p>
          </li>
        </ol>
      </LocationInfo>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        bookingLink
        phone
      }
    }
    allPricesJson {
      edges {
        node {
          packageName
          packageDetails
          id
          price
          color
          psRetouch
        }
      }
    }
  }
`
