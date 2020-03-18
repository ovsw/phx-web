/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
// import HomeTestimonialItem from './HomeTestimonialItem'

const HomeTestimonials = () => {
  return (
    <section sx={{
      variant: 'sections.hpSection',
      bg: 'black',
      pb: [4, null, null, 5]
    }}>
      <Container>
        <span sx={{variant: 'text.superHeading', color: 'white'}}>Reviews from Our</span>
        <h2 sx={{variant: 'text.mainHeading', mb: 4, color: 'primary'}}>Satisfied <span sx={{color: 'white'}}>Clients</span></h2>
        <div className='embedsocial-reviews' data-ref='f30fd816a7ba7878a12bd537276ebd3fafc995fe' />

        {/* {testimonialsContent.map(testimonial => (
          <div key={testimonial.name}>
          <HomeTestimonialItem {...testimonial} />
          </div>
        ))} */}
      </Container>
    </section>
  )
}

export default HomeTestimonials

// const testimonialsContent = [
//   {
//     name: 'Andrew T.',
//     date: '3/03/2020',
//     content: 'Goldwater expedited my mortgage loan in a very short period of time and I was able to close while on vacation. The fees were very reasonable too. I can’t ask for better service and value.'
//   },
//   {
//     name: 'Micki F.',
//     date: '2/12/2020',
//     content: 'Jimmy and his staff were lightening fast with our loan request!  They were all so kind and kept in touch every step of the way!  Today’s technology of sending documentation electronically is super easy and secure!  Jimmy helped us 5 years ago and because the process so simple then there was no question to reach out to him again!'
//   },
//   {
//     name: 'Sunday E.',
//     date: '2/28/2020',
//     content: ' Jimmy and his team are truly fantastic.  They are professional go getters who bring the highest integrity to what they do best - get you into the home of your dreams.  We\'ve worked with them twice and won\'t go anywhere else for our future needs.'
//   },
//   {
//     name: 'Garret D.',
//     date: '2/27/2020',
//     content: 'Jimmy and his team are top tier, not just in customer service, but also knowledge, efficiency & communication!  As Veteran (VA) specialists, he is the best...  fast, fair & stress free home mortgage, from start to finish.  Jimmy helped us a few years ago, and now again...we will be clients for life!'
//   },
//   {
//     name: 'Jeremy W.',
//     date: '2/27/2020',
//     content: ' Jimmy and the team at Goldwater Bank are great and so easy to work with. Their responsiveness is unparalleled and in a busy world it made all of the difference to me on top of getting amazing service and great rates from him and the team.'
//   },
//   {
//     name: 'Micky F.',
//     date: '2/12/2020',
//     content: 'Jimmy and his staff were lightening fast with our loan request!  They were all so kind and kept in touch every step of the way!  Today’s technology of sending documentation electronically is super easy and secure!  Jimmy helped us 5 years ago and because the process was so simple then there was no question to reach out to him again!  Many thanks to all who had their part in closing our loan refinance!'
//   },
//   {
//     name: 'Tina D.',
//     date: '12/11/2019',
//     content: ' They were the best I am self-employed which makes me jump through more hoops but they got everything done and on time and with the least amount of trouble they are the best thank you'
//   },
//   {
//     name: 'Mike C.',
//     date: '11/13/2019',
//     content: 'Phoenix Mortgage and especially Jimmy are The Best. We were selling and buying and trying to close all on the same day and THEY made it happen. They were always in contact with us and always reassured us that is was being taken care of. The best experience I have ever had. Thank you Jimmy!'
//   },
//   {
//     name: 'Jodi C.',
//     date: '11/07/2019',
//     content: 'He was by far the best to work with his team is great would highly recommend to anyone!'
//   },
//   {
//     name: 'Chris M.',
//     date: '10/30/2019',
//     content: 'Jimmy made the process easy. I already had a lender with the real estate agent that I had. I spoke with a friend who recommended Jimmy and ended up going with Jimmy instead of going with my real estate agents lender. Their office is super clean and the entire staff is really helpful and friendly. Thanks for the help.'
//   },
//   {
//     name: 'Jesus Q.',
//     date: '10/25/2019',
//     content: 'Awesome people I used them twice and both experience were more than great very fast and well explained vary helpful people.'
//   },
//   {
//     name: 'Bernadette B.',
//     date: '10/21/2019',
//     content: 'You can\'t find these lenders anymore - they are few and far between and Jimmy V is a solid loan originator. He takes the time to meet with every family and he is there to serve not to sell to. I am confident in my business knowing that he is a solid source of information. He keeps his finger on the pulse and knows what the market is doing every day. If Jimmy V. can\'t approve a loan, there isn\'t a loan. That\'s it, end of story. Thank you Jimmy V for all you do. You are second to NONE.'
//   },
//   {
//     name: 'Mr. R.',
//     date: '10/04/2019',
//     content: 'Jimmy and his team are incredible. They worked hard for my family when it came time to purchase our home. The focus and dedication from all team members was instrumental in our offer getting to the seller first and having a fast close on the house. Jimmy and team, keep...'
//   }
// ]
