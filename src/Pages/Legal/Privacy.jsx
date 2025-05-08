import { Container, Section } from '../../Components/layout'
import { Heading, BodyText } from '../../Components/typography'

const Privacy = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Privacy Policy
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
                <Heading className='text-2xl mb-4'>Introduction</Heading>
                <BodyText className='text-gray-600'>
                  This Privacy Policy describes how we collect, use, and handle
                  your personal information when you use our website and
                  services. We are committed to protecting your privacy and
                  ensuring the security of your personal data.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  Information We Collect
                </Heading>
                <BodyText className='text-gray-600 mb-4'>
                  We collect information that you provide directly to us,
                  including:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Donation information</li>
                  <li>Event registration details</li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  How We Use Your Information
                </Heading>
                <BodyText className='text-gray-600 mb-4'>
                  We use the information we collect to:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>Process your donations and registrations</li>
                  <li>Send you updates about our programs and events</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Information Sharing</Heading>
                <BodyText className='text-gray-600'>
                  We do not sell or rent your personal information to third
                  parties. We may share your information with:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600 mt-4'>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Partners with your explicit consent</li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Data Security</Heading>
                <BodyText className='text-gray-600'>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Your Rights</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  You have the right to:
                </BodyText>
                <ul className='list-disc pl-6 space-y-2 text-gray-600'>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  Cookies and Tracking
                </Heading>
                <BodyText className='text-gray-600'>
                  We use cookies and similar tracking technologies to improve
                  your browsing experience and analyze website traffic. You can
                  control cookie settings through your browser preferences.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>
                  Changes to This Policy
                </Heading>
                <BodyText className='text-gray-600'>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
                </BodyText>
              </section>

              <section>
                <Heading className='text-2xl mb-4'>Contact Us</Heading>
                <BodyText className='text-gray-600'>
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@autismawareness.org
                </BodyText>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Privacy
