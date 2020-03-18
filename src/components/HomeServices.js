/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import HomeServicesItem from './HomeServicesItem'

function HomeServices (props) {
  return (

    <section sx={{variant: 'sections.hpSection'}}>
      <Container>
        <div sx={{mb: 5}}>
          <span sx={{variant: 'text.superHeading'}}>About</span>
          <h2 sx={{variant: 'text.mainHeading', mb: 0}}>Types of <span sx={{color: 'primary'}}>Loans</span></h2>
        </div>

        <div className='loansWrapperFlex' sx={loansWrapperStyles}>

          {loansList.map((item, i) => (
            <div className='loanItemWrapper' sx={{display: 'flex'}} key={item.title}>
              <HomeServicesItem {...item} i={i} key={item.title} />
            </div>
          ))}

        </div>

      </Container>
    </section>
  )
}

export default HomeServices

const loansWrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '.loanItemWrapper': {
    width: ['full', 'null', '1/2', '1/3'],
    pr: [null, null, 3, 4],
    mb: [4, null, 3, 4]
  },
  '>div:nth-of-type(2)': {
    pr: [null, null, 0, 4]
  },
  '>div:nth-of-type(3)': {
    pr: [null, null, null, 0]
  }
}

const loansList = [
  {
    title: 'Conventional',
    slug: '/phoenix-conventional-loan/',
    icon: 'conventional-loan',
    shortDescription: 'A conventional mortgage loan is secured by the backing of a private lender, unlike FHA or VA loans, which are guaranteed by the federal government.',
    description: 'A conventional mortgage loan is secured by the backing of a private lender, unlike FHA or VA loans, which are guaranteed by the federal government. Good credit, steady income and a 20% down payment means you will get a much lower fixed rate of interest. You should also keep in mind that the higher down payment you are making on a conventional mortgage loan will enable you to build a higher level of equity much faster. With this type of loan, if you cannot manage the 20% down payment, you may need to get Private Mortgage Insurance (PMI). Under the terms of a conventional mortgage loan, you will normally be required to pay the full amount of the loan at a fixed interest rate over the course of 30 years.',
    bullets: [
      'secured by the backing of a private lender',
      'lower fixed rate of interest possible',
      'higher down payment = build a higher level of equity much faster',
      'may need Private Mortgage Insurance (PMI)'
    ]
  },
  {
    title: 'FHA',
    slug: '/phoenix-fha-loan/',
    icon: 'fha-loan',
    shortDescription: 'An FHA loan, which is backed by the Federal Housing Administration (FHA),is friendlier to first time home buyers than many other types of loans.',
    description: 'An FHA loan, which is backed by the Federal Housing Administration (FHA),is friendlier to first time home buyers than many other types of loans. A very low down payment of 3.5% required. Private Mortgage Insurance (PMI) is usually necessary when the down payment is this low, but you don\'t have to be approved in advance to obtain it. Another advantage is that credit score levels are not as stringent. Even with a bad credit score, bankruptcy, or past foreclosure, you may still be able to qualify for an FHA loan. Another big benefit of an FHA loan is that it is assumable, meaning that if you decide to sell your home at some future date, the new buyer can assume your mortgage. First Choice Loan Services has been approved as a mortgage lender by the FHA.',
    bullets: [
      'friendlier to first time home buyers',
      'backed by the Federal Housing Administration',
      'low down payment of 3.5% required',
      'may qualify even with bad credit, bancruptcy or foreclosure'
    ]
  },
  {
    title: 'VA',
    slug: '/phoenix-va-loan/',
    icon: 'american-flag',
    shortDescription: 'A VA loan is one of the benefits of serving in the United States Armed Forcesand available to those serving in the United States military currently or who have served in the past.',
    description: 'A VA loan is one of the benefits of serving in the United States Armed Forcesand are available for those who are either currently serving in the United States military or who have served in the past. Veterans are required to furnish the required paperwork regarding their military service and comply with the proper application process. The VA loan is backed by the federal government, requires no down payment and no mortgage insurance. Credit score requirements may be lower than for a conventional loan. VA loans can be used to refinance a property purchased under the VA program, to purchase specially adapted properties for those with service-related disabilities, and help Native American veterans purchase property on tribal-held land.',
    bullets: [
      'for active or past members of the U.S. military',
      'backed by the Federal Government',
      'no down payment and no mortgage insurance',
      'Credit score requirements may be lower'
    ]
  },
  {
    title: 'USDA',
    slug: '/phoenix-usda-loan/',
    icon: 'usda-loan',
    shortDescription: 'The USDA loan may be an option if you are a first-time home buyer with bad credit or a lower than average income.',
    description: 'The USDA loan may be an option if you are a first-time home buyer with bad credit or a lower than average income. Even if you have been turned down by other lenders for FHA or conventional loans, you may be able to get this type of loan. Backed by the federal government, there is no down payment required but you will have to pay Private Mortgage Insurance (PMI). You will have a very low rate of interest with this loan. The requirements are easy to meet and the repayment terms are quite liberal. There are 3 loan programs; one is for applicants who have incomes that are below, or seriously below, the national average. There are also grants available from the government for home improvement.',
    bullets: [
      'good option for first-time home buyer with bad credit or lower income',
      'Backed by the Federal Government',
      'no down payment required, but Private Mortgage Insurance (PMI) needed',
      'very low interest rate'
    ]
  },
  {
    title: 'Jumbo',
    slug: '/phoenix-jumbo-loan/',
    icon: 'elephant',
    shortDescription: 'Jumbo loans are plus-size loans that are for dollar amounts larger than conforming loan limits (threshold of $453,000 in most areas).',
    description: 'When we hear the term \'jumbo\', we think of large or plus size, which is the perfect definition of a Jumbo loan. Jumbo loans are plus-size loans that are for dollar amounts larger than conforming loan limits. In most areas of the US the threshold for jumbo loans is $453,000. Jumbo loans are considered riskier, so the requirements include higher down payments and better credit scores - often at least 700. Some Jumbo loans require the borrower to have some cash reserves available. The interest rate tends to be higher and the terms are stricter. However, there are a number of benefits to Jumbo loans, including the ability to purchase a more expensive home, and attractive tax breaks. VA Jumbo loans are also available for veterans.',
    bullets: [
      'plus-size loans for larger $ amounts than conforming loan limits',
      'attractive tax breaks',
      'riskier, need credit scores  of at least 700',
      'higher interest rate, stricter terms'
    ]
  }
]
