# Currency Converter Project

This project is a simple currency converter web application built using React, JavaScript, HTML, and Tailwind CSS. It utilizes an external API to fetch the latest currency exchange rates and allows users to convert between different currencies in real-time.

## Features

- **Live Currency Conversion**: Get up-to-date currency exchange rates from an API.
- **User-Friendly Interface**: Simple and intuitive design for easy currency conversion.
- **Supports Multiple Currencies**: Convert between a wide range of currencies based on the API data.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for implementing functionality.
- **HTML**: Markup language for structuring the web pages.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **API**: Utilizes an external API to fetch currency exchange rate data.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KnightSoul9/Currency_Converter.git
   ```

2. **Navigate to Project Directory**:
   ```bash
   cd Currency_Converter
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Open in Browser**:
   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Select the base currency and target currency from the dropdown menus.
- Enter the amount you want to convert.
- The converted amount will be displayed instantly.

## API Integration

This project uses an external API to fetch currency exchange rates. You will need to replace `API_KEY` in the code with your own API key. Here's how to integrate the API:

1. **Get API Key**: Sign up on a currency exchange rate API provider (e.g., [Open Exchange Rates](https://openexchangerates.org/)).
2. **Replace API Key**: In the codebase, replace `API_KEY` with your actual API key.

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';

// Fetch exchange rates

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())//converting to json
        .then((res) => setData(res[currency]))//storing the converted json data in a usestate nopt using the regular variable coz it will not get updated in the UI 
        console.log(data);
```
## Acknowledgements

Special thanks to Hitesh Choudhary and his YouTube channel "Chai aur Code" for the helpful tutorial videos that guided and inspired the development of this project.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new features to propose, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Author**: Satyam
**Contact**: satysatyam14@gmail.com  
**Project Link**: [GitHub](https://github.com/KnightSoul9/Currency_Converter.git)

Enjoy converting currencies with ease! 🌍💱
