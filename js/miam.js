function calculPrix() {
    var prix = 0;
    var choix;
    var entree = document.miam.entree;
    for (i = 0; i < entree.length; i++)
        if (entree[i].checked) {
            choix = entree[i].value;
            choix_entree = entree[i].value
        }

    switch (choix) {
        case "soupe aux champignons":
            prix += 4;
            break;
        case "tartare de saumon":
            prix += 4;
            break;
        case "salade de chevre":
            prix += 3.5;
            break;
    }
    var plat = document.miam.plat;
    for (i = 0; i < plat.length; i++)
        if (plat[i].checked) {
            choix = plat[i].value;
            choix_plat = plat[i].value
        }

    switch (choix) {
        case "boeuf bourguignon":
            prix += 7.5;
            break;
        case "moussaka grecque":
            prix += 5.5;
            break;
        case "quiche lorraine":
            prix += 6.5;
            break;
    }
    var dessert = document.miam.dessert;
    for (i = 0; i < dessert.length; i++)
        if (dessert[i].checked) {
            choix = dessert[i].value;
            choix_dessert = dessert[i].value
        }

    switch (choix) {
        case "tarte au citron":
            prix += 4;
            break;
        case "mousse au chocolat":
            prix += 4;
            break;
        case "sorbet de framboise":
            prix += 3.5;
            break;
    }
    document.miam.total.value = prix;
}

function afficherFacture() {
    calculPrix();    
    
    alert('Facture au nom de ' + document.miam.nom.value.toUpperCase() + '\n\n' + 'Entrée : ' + choix_entree + '\n' + 'Plat : ' + choix_plat + '\n' + 'Dessert : ' + choix_dessert + '\n\n' + 'TOTAL : '  + document.miam.total.value + ' euros')
}