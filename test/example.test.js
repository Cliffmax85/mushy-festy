// IMPORT MODULES under test here:
import { renderMushroom } from "../render-utils";
// import { example } from '../example.js';

const test = QUnit.test;

test('this test should return the div class of renderMushroom, which is "renderMushroom"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="mushroom"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom().outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
