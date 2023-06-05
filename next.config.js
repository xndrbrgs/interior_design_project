/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: [
      "i.ibb.co",
      "links.papareact.com",
      "a0.muscache.com",
      "bayut-production.s3.eu-central-1.amazonaws.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic3VpdGVjYWJlMSIsImEiOiJjbGlocWY1dXkwamRmM3dwNmZraXN3NHNvIn0.b-ZNon2Vt9IjGFkda4ZtHw",
  },
};
