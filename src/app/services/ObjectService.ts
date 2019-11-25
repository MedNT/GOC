import swal from 'sweetalert';

export class ObjectService {

    objectList = [
        {
            id: 1,
            name: 'SmartTV',
            place: 'Salon',
            status: 'connecté',
            etat: 'allumé'
        },
        {
            id: 2,
            name: 'Haut Parleurs',
            place: 'Chambre 1',
            status: 'deconnecté',
            etat: 'eteint'
        },
        {
            id: 3,
            name: 'Fenêtre',
            place: 'Cuisine',
            status: 'connecté',
            etat: 'allumé'
        },
        {
            id: 4,
            name: 'Téléphone',
            place: 'Chambre 1',
            status: 'deconnecté',
            etat: 'eteint'
        }
    ];

    addObject(data) {
        this.objectList.push(data);
    }

    getColorByStatus(i) {
        if (this.objectList[i].status === 'connecté') { return 'green'; }
        return 'red';
    }

    getColorByEtat(i) {
        if (this.objectList[i].etat === 'allumé') { return 'green'; }
        return 'red';
    }

    switchStatus(i) {
        if (this.objectList[i].status === 'connecté') { this.objectList[i].status = 'deconnecté'; } else { this.objectList[i].status = 'connecté'; }
    }

    switchEtat(i) {
        if (this.objectList[i].etat === 'allumé' && this.objectList[i].status === 'deconnecté') {
            this.objectList[i].etat = 'eteint';
        } else if (this.objectList[i].etat === 'allumé' && this.objectList[i].status === 'connecté') {
          // @ts-ignore
          swal({
                icon: 'error',
                text: 'Objet est connéctée ! déconnécter le pour l atteindre'
            });
        } else {
            this.objectList[i].etat = 'allumé';
        }
    }

    connectAll() {
        this.objectList.map( e => {
            if (e.etat === 'allumé') {
                e.status = 'connecté';
            } else if (e.etat === 'eteint') {
              // @ts-ignore
              swal({icon: 'error', text: 'Objet ' + e.name + ' est eteint ! Alumer le pour le connecté'});
            }
        });
    }

    disconnectAll() {
        this.objectList.map( e => {
            e.status = 'deconnecté';
        });
    }

    allumeAll() {
        this.objectList.map( e => {
            e.etat = 'allumé';
        });
    }

    eteindreAll() {
        this.objectList.map( e => {
            if (e.status === 'deconnecté') {
                e.etat = 'eteint';
            } else if (e.status === 'connecté') {
              // @ts-ignore
              swal({
                    icon: 'error',
                    text: 'Objet ' + e.name + ' est connéctée ! déconnécter le pour l atteindre'
                });
            }
        });
    }

    getAppareil(id: number) {
      for (const et of this.objectList) {
        if (et.id === id) {
          return et;
        }
      }
    }

    AppareilExist(id: number) {
      for (const et of this.objectList) {
        if (et.id === id) {
          return true;
        } else { return false; }
      }
    }
}
