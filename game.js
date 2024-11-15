function checkKit() {
    const kitMessage = document.getElementById('kitMessage');
    const hasEau = document.getElementById('eau').checked;
    const hasNourriture = document.getElementById('nourriture').checked;
    const hasMedicaments = document.getElementById('medicaments').checked;
    const hasVetements = document.getElementById('vetements').checked;
    const hasDocuments = document.getElementById('documents').checked;

    if (hasEau && hasNourriture && hasMedicaments && hasVetements && hasDocuments) {
        kitMessage.textContent = 'Vous avez correctement préparé votre kit !';
        document.getElementById('phase1').classList.add('hidden');
        document.getElementById('phase2').classList.remove('hidden');
    } else {
        kitMessage.textContent = 'Assurez-vous d\'inclure tous les éléments dans votre kit d\'urgence.';
    }
}

function evacuer(response) {
    const evacMessage = document.getElementById('evacMessage');
    if (response === 'oui') {
        evacMessage.textContent = 'Vous avez évacué en sécurité';
        document.getElementById('phase2').classList.add('hidden');
        document.getElementById('phase3').classList.remove('hidden');
    } else {
        evacMessage.textContent = 'Vous êtes en danger, évacuez immédiatement !';
    }
}

function nettoyer(response) {
    const cleanMessage = document.getElementById('cleanMessage');
    if (response === 'avec un masque') {
        cleanMessage.textContent = 'Bonne réponse, vous êtes en sécurité';
    } else {
        cleanMessage.textContent = 'Mauvaise réponse, portez un masque pour votre sécurité';
    }
}
