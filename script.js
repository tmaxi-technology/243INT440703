// Lớp MáyTính để đóng gói logic
class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }

    // Xóa toàn bộ trạng thái, reset máy tính
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    // Xóa một ký tự (backspace)
    delete() {
        if (this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') {
            this.currentOperand = '0';
        }
    }

    // Thêm số hoặc dấu chấm vào cuối
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return; // Chỉ cho phép một dấu chấm
        if (number === '+/-') {
            if (this.currentOperand === '0') return;
            this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
            return;
        }
        
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }
    
    // Chọn một phép toán
    chooseOperation(operation) {
        // Xử lý các phép toán đơn (tác động ngay lập tức)
        if (['sqrt', 'square', 'inverse', 'percent'].includes(operation)) {
            this.computeSingle(operation);
            return;
        }

        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute(); // Tính kết quả của phép toán trước nếu có
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    // Tính toán các phép toán đơn (căn bậc hai, bình phương...)
    computeSingle(operation) {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        let result;
        switch(operation) {
            case 'sqrt':
                if (current < 0) { alert("Invalid input for square root"); return; }
                result = Math.sqrt(current);
                break;
            case 'square':
                result = Math.pow(current, 2);
                break;
            case 'inverse':
                if (current === 0) { alert("Cannot divide by zero"); return; }
                result = 1 / current;
                break;
            case 'percent':
                result = current / 100;
                break;
            default:
                return;
        }
        this.currentOperand = result.toString();
        this.operation = undefined;
        this.previousOperand = '';
    }


    // Thực hiện phép tính chính (cộng, trừ, nhân, chia)
    compute() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case 'add': result = prev + current; break;
            case 'subtract': result = prev - current; break;
            case 'multiply': result = prev * current; break;
            case 'divide':
                if (current === 0) { alert("Cannot divide by zero"); this.clear(); return; }
                result = prev / current;
                break;
            default: return;
        }
        this.currentOperand = result.toString();
        this.operation = undefined;
        this.previousOperand = '';
    }

    // Định dạng số để hiển thị đẹp hơn (ví dụ: 1,000,000)
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    // Cập nhật nội dung trên màn hình
    updateDisplay() {
        this.displayElement.innerText = this.getDisplayNumber(this.currentOperand);
    }
}


// --- Kết nối Logic với các nút bấm trên giao diện ---

const displayElement = document.querySelector('[data-display]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]'); // Chỉ cần chọn 1 nút C/CE

const calculator = new Calculator(displayElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operation);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

// Nút C/CE đều gọi hàm clear
document.querySelectorAll('[data-all-clear]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
    });
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});