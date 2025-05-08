import { Container, Section } from '../../Components/layout'
import { Heading, BodyText } from '../../Components/typography'

const Terms = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Terms of Service
            </Heading>
            <BodyText className='text-lg text-gray-600'>
              Last updated: March 15, 2024
            </BodyText>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='max-w-3xl mx-auto'>
            <div className='space-y-8'>
              <section>
                <Heading className='text-2xl mb-4'>Agreement to Terms</Heading>
                <BodyText className='text-gray-600'>
                  By accessing and using our website and services, you agree to
                  be bound by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing this site.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Use License</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  Permission is granted to temporarily access the materials on
                  our website for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title,
                  and under this license you may not:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on the website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or
                    &quot;mirror&quot; the materials on any other server
                  </li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>User Accounts</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  When you create an account with us, you must provide accurate
                  and complete information. You are responsible for:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  Intellectual Property
                </Heading>
                <BodyText className='text-gray-600'>
                  The content, organization, graphics, design, and other matters
                  related to the website are protected under applicable
                  copyrights and other proprietary laws. The copying,
                  redistribution, use, or publication of any such content is
                  prohibited without our express permission.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>User Content</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  By posting content to our website, you grant us the right to
                  use, modify, publicly perform, publicly display, reproduce,
                  and distribute such content. You represent and warrant that:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>The content is yours or you have the right to use it</li>
                  <li>
                    The content does not violate the rights of any third party
                  </li>
                  <li>
                    The content is not defamatory, obscene, or otherwise
                    objectionable
                  </li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Disclaimer</Heading>
                <BodyText className='text-gray-600'>
                  The materials on our website are provided on an &apos;as
                  is&apos; basis. We make no warranties, expressed or implied,
                  and hereby disclaim and negate all other warranties including,
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Limitations</Heading>
                <BodyText className='text-gray-600'>
                  In no event shall we or our suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on our website.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  Revisions and Errata
                </Heading>
                <BodyText className='text-gray-600'>
                  The materials appearing on our website could include
                  technical, typographical, or photographic errors. We do not
                  warrant that any of the materials on our website are accurate,
                  complete, or current. We may make changes to the materials
                  contained on our website at any time without notice.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Links</Heading>
                <BodyText className='text-gray-600'>
                  We have not reviewed all of the sites linked to our website
                  and are not responsible for the contents of any such linked
                  site. The inclusion of any link does not imply endorsement by
                  us of the site. Use of any such linked website is at the
                  user&apos;s own risk.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Governing Law</Heading>
                <BodyText className='text-gray-600'>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Nigeria and you irrevocably submit
                  to the exclusive jurisdiction of the courts in that location.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Contact Us</Heading>
                <BodyText className='text-gray-600'>
                  If you have any questions about these Terms of Service, please
                  contact us at legal@autismawareness.org
                </BodyText>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Terms
