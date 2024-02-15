import subprocess
import sys
def compile_javascript(code):
    try:
        # Write the JavaScript code to a temporary file
        with open('temp.js', 'w') as f:
            f.write(code)
        
        # Execute the JavaScript code using Node.js
        result = subprocess.check_output(['node', 'temp.js'], stderr=subprocess.STDOUT, text=True)

        # Return the output of the JavaScript code
        return result.strip()
    except subprocess.CalledProcessError as e:
        # If an error occurs during execution, return the error message
        return f'Error: {e.output.strip()}'

javascript_code = sys.argv[1]
# javascript_code = """
# function sum(a, b){ return a + b} console.log(sum(2, 5));
# """
output = compile_javascript(javascript_code)
print(output)
sys.argv.append(output)
print(sys.argv[2])
