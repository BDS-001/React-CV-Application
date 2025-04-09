# CV Generator

A React application that allows users to create and customize their CV/résumé with a clean, professional output.

## Features

- **Dynamic Form Input**: Add and remove sections as needed for education, experience, and skills
- **Live Preview**: Generate a professional CV layout with your information
- **Edit Functionality**: Easily switch between editing mode and preview mode
- **Responsive Design**: Works on various screen sizes
- **Animated UI Elements**: Smooth transitions when adding or removing entries

## Project Structure

```
src/
├── components/
│   ├── App.jsx            # Main application component
│   ├── Cv.jsx             # CV preview component
│   ├── Education.jsx      # Education section component
│   ├── Experience.jsx     # Work experience section component
│   ├── GeneralInformation.jsx # Personal details component
│   ├── Handlers.jsx       # Utility functions for handling events
│   └── Skills.jsx         # Skills section component
├── styles/
│   ├── App.css            # Main application styles
│   ├── Cv.css             # CV preview styles
│   ├── Education.css      # Education section styles
│   ├── Experience.css     # Experience section styles
│   ├── GeneralInformation.css # General information styles
│   ├── index.css          # Global styles
│   └── Skills.css         # Skills section styles
└── main.jsx               # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cv-generator.git
   cd cv-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

1. **Fill in General Information**: Add your name, contact details, and a brief bio
2. **Add Education**: Click "Add Education" to include your academic background
3. **Add Experience**: Document your work history with the "Add Experience" button
4. **Add Skills**: List your professional and personal skills
5. **Generate CV**: Click the "Generate" button to see your formatted CV
6. **Edit CV**: If needed, click "Edit" to return to the form and make changes

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [UUID](https://github.com/uuidjs/uuid) - For generating unique IDs for form entries

## Project Features in Detail

### State Management

The application uses React's useState hook to manage form data across different components:

- General information (name, email, phone, address, about)
- Education entries (multiple, with add/remove functionality)
- Experience entries (multiple, with add/remove functionality)
- Skills (multiple, with add/remove functionality)

### Component Communication

- Props are used to pass state and setter functions to child components
- The parent App component orchestrates data flow between input forms and the CV preview

### Event Handling

- Custom handlers manage form input changes across all components
- Animation effects are applied when removing entries from the form

### CV Layout

The CV is formatted with a side column for contact information, about me, and skills, while the main column displays education and experience details.

## Future Enhancements

- Add print functionality
- Enable downloading the CV as a PDF
- Add different CV templates
- Allow customization of colors and fonts
- Add drag-and-drop for reordering sections
- Implement local storage to persist data between sessions

## Acknowledgments

- This project was created as part of a React learning assignment
- Design inspiration from modern CV templates