<template>
    <div>
        <button @click="showPopup" class="btn b mt-5">Ajouter une catégorie</button>
        <div class="container mt-5">
            <div v-if="isPopupVisible" class="popup">
                <div class="popup-content">
                    <form @submit.prevent="addCategory" class="col-md-8">
                        <div class="form-group">
                            <label for="libelle">Libellé :</label>
                            <input type="text" id="libelle" v-model="newCategory.libelle" class="form-control" required>
                        </div>
                        <button type="submit" class="btn ">Ajouter</button>&nbsp;
                        <button @click="hidePopup" class="btn">Annuler</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Libellé</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in categories" :key="cat.id" >
                    <td>{{ cat.id }}</td>
                    <td>{{ cat.libelle }}</td>
                    <td>
                        <button class="btn">Delete</button>&nbsp;
                        <button class="btn">Update</button>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isPopupVisible: false,
            newCategory: {
                libelle: ''
            },
            categories: [],
        };
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        showPopup() {
            this.isPopupVisible = true;
        },
        hidePopup() {
            this.isPopupVisible = false;
        },
        async fetchCategories() {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/categorie");
                this.categories = response.data;
                console.log("cat:", this.categories);
            } catch (error) {
                console.error(error);
            }
        },
        async addCategory() {
            const formData = new FormData();
            formData.append('libelle', this.newCategory.libelle);
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/categorie", formData, {
                });
                console.log(response.data);
                this.closePopup();
            } catch (error) {
                console.error(error);
            }

            // Reset the form
            this.newCategory.libelle = '';
        }
    },
    mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped></style>