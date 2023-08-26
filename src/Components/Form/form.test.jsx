import { expect, test, describe, vi } from "vitest";

import Form from "./index"; // Import the Form component
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';


describe('Form Component', () => {
 test('renders the form correctly', () => {
    render(<Form setLoading={() => {}} handleApiCall={() => {}} />);
    
    // Test whether the form elements are rendered correctly
    expect(screen.getByLabelText('URL:')).toBeInTheDocument();

 
    expect(screen.getByText('GO!')).toBeInTheDocument();
  });



  // Add more tests as needed
});
