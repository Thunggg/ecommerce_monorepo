import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from 'react-email'

export interface OtpVerifyEmailProps {
  verificationCode?: string
}

const colors = {
  text: '#333333',
  textDark: '#212121',
  link: '#2754C5',
  headerBg: '#252f3d',
  containerBg: '#eeeeee',
  cardBg: '#ffffff',
}

export default function AWSVerifyEmail({ verificationCode }: OtpVerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Email verification code</Preview>
      <Body
        style={{
          backgroundColor: colors.cardBg,
          color: colors.textDark,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          margin: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: colors.containerBg,
            margin: '0 auto',
            padding: '20px',
            maxWidth: '600px',
          }}
        >
          <Section style={{ backgroundColor: colors.cardBg }}>
            <Section
              style={{
                backgroundColor: colors.headerBg,
                padding: '20px 0',
                textAlign: 'center',
              }}
            >
              <Img
                src="https://i.pinimg.com/736x/07/74/87/077487ce2e1b6b66c72a6f62d39244b3.jpg"
                width="75"
                height="45"
                alt="Logo"
                style={{ margin: '0 auto' }}
              />
            </Section>
            <Section style={{ padding: '25px 35px' }}>
              <Heading
                style={{
                  color: colors.text,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  margin: '0 0 15px',
                }}
              >
                Verify your email address
              </Heading>
              <Text
                style={{
                  color: colors.text,
                  fontSize: '14px',
                  lineHeight: '24px',
                  margin: '24px 0 14px',
                }}
              >
                Thanks for signing up. We want to make sure it&apos;s really you. Please enter
                the following verification code when prompted. If you don&apos;t want to create an
                account, you can ignore this message.
              </Text>
              <Section style={{ textAlign: 'center' }}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    margin: '0 0 8px',
                    textAlign: 'center',
                  }}
                >
                  Verification code
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '36px',
                    fontWeight: 'bold',
                    margin: '10px 0',
                    textAlign: 'center',
                    letterSpacing: '4px',
                  }}
                >
                  {verificationCode}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: '14px',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  (This code is valid for 10 minutes)
                </Text>
              </Section>
            </Section>
            <Hr style={{ borderColor: '#e6e6e6', margin: 0 }} />
            <Section style={{ padding: '25px 35px' }}>
              <Text style={{ color: colors.text, fontSize: '14px', margin: 0 }}>
                We will never email you and ask you to disclose or verify your password, credit
                card, or banking account number.
              </Text>
            </Section>
          </Section>
          <Text
            style={{
              color: colors.text,
              fontSize: '12px',
              margin: '24px 0 0',
              padding: '0 20px',
              lineHeight: '20px',
            }}
          >
            If you have questions, contact our support team. View our{' '}
            <Link
              href="https://example.com/privacy"
              target="_blank"
              style={{
                color: colors.link,
                fontSize: '14px',
                textDecoration: 'underline',
              }}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

AWSVerifyEmail.PreviewProps = {
  verificationCode: '596853',
} satisfies OtpVerifyEmailProps
