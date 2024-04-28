/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.icons8.com",
      "res.cloudinary.com",
      "www.sportsuncle.com",
      "www.croma.com",
      "media-ik.croma.com",
      "www.bigbasket.com",
    ],
  },
  security: {
    // Set the content security policy to allow 'self' and the specific origins you need.
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "example.com",
          "another-origin.com",
        ],
        // Add any other necessary directives here.
      },
    },

    // Specify the allowed list of external domains for cross-origin communication.
    // Be sure to replace 'example.com' and 'another-origin.com' with the actual domains.
    allowedExternalDomains: ["", "another-origin.com"],
  },
  env: {
    GRAPHQL_SERVER: "http://localhost:8000/graph",
    SHIPPING: "50",
    Discount: "10",
  },
 
};

module.exports = nextConfig;
