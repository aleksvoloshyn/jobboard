const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},

    extend: {
      colors: {
        secondary: '#878D9D',
        pages: 'rgba(56, 65, 93, 0.602109)',
        applbutton: '#384564',
        geolocation: '#E7EAF0',
        geolocationBg: '#2A3047',
        detPrText: '#3A4562',
        hr: '#3A4562',
        detSecText: '#38415D',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      width: {
        mobile: '396px',
        avatar: '66px',
        location: '13px',
        mapMobile: '372px',
      },
      height: {
        mobile: '206px',
        avatar: '66px',
        location: '18px',
        button: '52px',
        mapMobile: '436px',
        contMobile: '236px',
      },
      backgroundColor: {
        mobile: '#EFF0F5',
      },
      dropShadow: {
        mobile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '28px': '28px',
      },
      lineHeight: {
        '24px': '24px',
        '25px': '25px',
        '30px': '30px',
        '34.1px': '34.1px',
      },
      padding: {
        '9px': '9px',
        '13px': '13px',
        '15px': '15px',
        '17px': '17px',
        '24px': '24px',
        '27px': '27px',
        '37px': '37px',
        '45px': '45px',
        '54px': '54px',
      },
      margin: {
        '1px': '1px',
        '5px': '5px',
        '7px': '7px',
        '12px': '12px',
        '17px': '17px',
        '19px': '19px',
        '24px': '24px',
        '26px': '26px',
        '32px': '32px',
        '43px': '43px',
        '64px': '64px',
        '100px': '100px',
        '135px': '135px',
      },
    },
  },
  plugins: [],
}
