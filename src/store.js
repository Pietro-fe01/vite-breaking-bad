/*------------------------------------
    CONDIVIDERE DATI IN MODO GLOBALE
-------------------------------------*/
import {reactive} from 'vue';

export const store = reactive ({
    charactersList: [],
    isFinished: false,
});