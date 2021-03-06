import { defineStore } from 'pinia';

//Die Funktion läuft intern bei allen actions ab um den State im localstorage zu speichern
function SaveState(abmelden) {
  const store = PiniaStore();

  //State speichern
  if (store.aktiverUser != null) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  } else if (abmelden) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  }
}

//MainStore
export const PiniaStore = defineStore('electronicCity', {
  //State
  state: () => ({
    aktiverUser: null,
  }),
  //Getter
  getters: {
    getAktivenUser() {
      return this.aktiverUser;
    },
    
  },
  //Actions
  actions: {
    setAktivenUser(user) {
      this.aktiverUser = user;

      SaveState();
    },
    deleteAktivenUser() {
      this.aktiverUser = null;
      SaveState(true);
    },
  },
});
