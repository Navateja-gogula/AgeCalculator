document.getElementById('ageCalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const errMes = document.getElementById('errMes');
    const result = document.getElementById('result');
    const ageResult = document.getElementById('ageResult');
    
    errMes.textContent = '';
    result.style.display = 'none';

    if (!day || !month || !year) {
        errMes.textContent = 'Please fill out all fields.';
        return;
    }

   
    if (day < 1 || day > 31) {
        errMes.textContent = 'Day must be between 1 and 31.';
        return;
    }

    if (month < 1 || month > 12) {
        errMes.textContent = 'Month must be between 1 and 12.';
        return;
    }

   
    const present = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > present) {
        errMes.textContent = 'Date cannot be in the future.';
        return;
    }

 
    if (birthDate.getDate() !== day || birthDate.getMonth() + 1 !== month || birthDate.getFullYear() !== year) {
        errMes.textContent = 'Please Enter Valid Date.';
        return;
    }


    let Years = present.getFullYear() - birthDate.getFullYear();
    let Months = present.getMonth() - birthDate.getMonth();
    let Days = present.getDate() - birthDate.getDate();

    if (Days < 0) {
        Months--;
        Days += new Date(present.getFullYear(), present.getMonth(), 0).getDate();  
    }

    if (Months < 0) {
        Years--;
        Months += 12;
    }

    result.style.display = 'block';
    ageResult.textContent = `${Years} Years , ${Months} Months, ${Days} Days`;
});


