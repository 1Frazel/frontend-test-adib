# My Answer For The Test

Hello teams 99.co!

My name is M. Adib Aulia Nurkhafif and you can call me Adib, first of all thank you very much for giving me chance to proceed the challenge of front-end developer internship program, it's very close for being a part of 99.co team!

Here is my answers based on all the challenge questions!

## Submission Links:
CodeSandbox: my codesandbox fork
Github: my github fork repository

## Questions

### React
  1. Hide description until the button is clicked
     - This is controlled by the **[useState]** hook **[isDescriptionVisible]**, which tracks whether the description is shown or hidden.
     - Initially, **[isDescriptionVisible]** is set to true for SEO, making the description visible when the page is first rendered.
     - The button toggles this state **[toggleDescriptionVisibility]** function, allowing the user to hide or show the description. The description section's visibility is toggled by applying a show class dynamically in the description-container div.
    
  2. Hide description only after page load (SEO concern)
     - This is achieved by setting isDescriptionVisible to true initially.
     - After the page fully loads, the description is hidden by using the useEffect hook:
       ```bash
       useEffect(() => {
          setIsDescriptionVisible(false);
        }, []);
       ```
     - This **[useEffect]** runs only once after the page has loaded, hiding the description from the user but keeping it visible initially for SEO purposes.

  3. Anonymize all phone numbers (show first 4 digits, replace last 4 with X)
     - The function **[anonymizePhoneNumber]** handles the anonymization by showing only the first four digits and replacing the last four with xxxx.
       ```bash
         const anonymizePhoneNumber = (phoneNumber) => {
        // Replace the space if it exists between the digits
        if (phoneNumber.includes(" ")) {
          return phoneNumber.slice(0, 5) + "xxxx"; // Keep the space after 4 digits
        }
        return phoneNumber.slice(0, 4) + " xxxx"; // Anonymize without space
        };
      
        // Function to toggle phone number visibility
        const togglePhoneNumber = (phoneNumber) => {
          setRevealedNumbers((prevState) => ({
            ...prevState,
            [phoneNumber]: !prevState[phoneNumber],
          }));
        };
        ```
     - It correctly handles both formats of phone numbers: with or without a space in the middle (e.g., 8234 5678 and 82345678).
     - This function is used in the **[renderDescription]** function to replace the last 4 digits of phone numbers in the description.
       ```bash
       // Function to render the description with anonymized phone numbers
        const renderDescription = (text) => {
          // Updated regex to match numbers with or without spaces
          const phoneRegex = /8\d{3} ?\d{4}/g; // Matches both 82345678 and 8234 5678
          const parts = text.split(phoneRegex);
          const matches = text.match(phoneRegex);
        ```
     4. Display new lines in the description text (not in one line)
        - To preserve the line breaks (new lines) in the description, the CSS rule **white-space: pre-wrap;** is applied to the **.description-text** class:
          ```bash
          .description-text {
            white-space: pre-wrap;
          }
          ```
        - This ensures that any line breaks or extra spaces in the description are maintained and displayed as they are.
      5. Clicking on the phone number reveals the real number
         - When a phone number is clicked, the **[togglePhoneNumber]** function is triggered.
         - The phone number is revealed or re-anonymized based on the **[revealedNumbers]** state, which tracks whether each phone number is currently revealed or anonymized.
         - The phone numbers are wrapped in **<span>** tags with an **[onClick]** event, making them interactive:
           ```bash
           <span
              key={i}
              className="phone-number"
              onClick={() => togglePhoneNumber(phoneNumber)}
            >
              {isRevealed ? phoneNumber : anonymizePhoneNumber(phoneNumber)}
            </span>
           ```
           
### Styling
  1. Main image optimization (too heavy)
     To reduce main image in this test we can **Reduce Image Width/Quality**

     On the URL given, we can modify the **w** and **q** for the image,
     - "w" is stand for width: how wide your image will be
     - "q" is stand for quality: how good your output image quality will be

     url:
     ```bash
     https://images.prismic.io/99-content/dc1594fb-f413-44ff-b8b5-c3ba6cd539cd_vbWkNuxt2hjgidVttoMRDX.jpg?auto=compress,format&w=2000&q=100
     ```
     For example, the **width** of this image is 2000
     meanwhile it's **quality** is 100

     - We can easily modify by just edit the url on **'w'** and **'q'**
     - We can make the image more width, but more less quality, or make it smaller width but with high quality
     