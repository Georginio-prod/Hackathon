<template>
    <div class="w-full flex justify-between items-center px-20 bg-black text-black py-5">
        <div class="bg-navbg py-6 w-full flex justify-between items-center rounded-md">
            <!-- Section de droite : Autocomplete -->
            <div class="w-full max-w-xs pl-6">
                <div class="relative">
                    <input type="text" v-model="query" @input="filterItems" placeholder="Search..."
                        class="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-autoC text-white placeholder-white" />

                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-2.5 h-5 w-5 text-white"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <ul v-if="filteredItems.length > 0" class="border rounded-lg mt-2 max-h-60 overflow-auto bg-white">
                    <li v-for="(item, index) in filteredItems" :key="index" @click="selectItem(item)"
                        class="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="flex items-center space-x-8 pr-6">
                <button>
                    <img src="/public/Icons-2.png" alt="icon" class="flex justify-center items-center">
                </button>

                <!-- Icône de notification -->
                <div class="relative flex justify-center items-center">
                    <button @click="fetchNotifications" class="relative">
                        <!-- Icône de cloche -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>

                        <!-- Petit point jaune pour indiquer une nouvelle notification   v-if="unreadCount > 0"-->
                        <span class="absolute top-0 right-0 mt-1 mr-1 block w-2 h-2 bg-yellow-500 rounded-full">
                        </span>

                        <!-- Badge pour les notifications non lues -->
                        <span v-if="unreadCount > 0"
                            class="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full -mt-2 -mr-2">
                            {{ unreadCount }}
                        </span>
                    </button>

                    <!-- Affichage des notifications -->
                    <div v-if="showNotifications"
                        class="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden">
                        <div v-for="(notification, index) in notifications" :key="index"
                            class="p-4 border-b last:border-b-0">
                            {{ notification.message }}
                        </div>
                        <div v-if="notifications.length === 0" class="p-4 text-center text-gray-500">
                            No new notifications
                        </div>
                    </div>
                </div>

                <!-- Carré avec image changeable -->
                <div class="relative rounded-lg flex justify-center items-center">
                    <img src="/public/Frame 28.png" alt="Image" class="w-11 h-11 object-contain rounded-lg" />
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
            filteredItems: [],
            unreadCount: 0, // Nombre de notifications non lues
            notifications: [], // Liste des notifications
            showNotifications: false,
            currentImage: "https://via.placeholder.com/100", // Image par défaut
            imageList: [
                "https://via.placeholder.com/100/FF0000", // Image rouge
                "https://via.placeholder.com/100/00FF00", // Image verte
                "https://via.placeholder.com/100/0000FF", // Image bleue
            ],
            imageIndex: 0,
        };
    },
    methods: {
        filterItems() {
            this.filteredItems = this.items.filter((item) =>
                item.toLowerCase().includes(this.query.toLowerCase())
            );
        },
        selectItem(item) {
            this.query = item;
            this.filteredItems = [];
        },
        fetchNotifications() {
            // Exemple de requête à un backend pour récupérer les notifications
            // Remplacez ceci par une requête réelle à votre backend
            fetch("https://example.com/api/notifications")
                .then((response) => response.json())
                .then((data) => {
                    this.notifications = data.notifications;
                    this.unreadCount = data.unreadCount;
                    this.showNotifications = !this.showNotifications;
                })
                .catch((error) => {
                    console.error("Error fetching notifications:", error);
                });
        },
        changeImage() {
            // Change l'image en parcourant la liste des images
            this.imageIndex = (this.imageIndex + 1) % this.imageList.length;
            this.currentImage = this.imageList[this.imageIndex];
        },
    },
};
</script>

<style>
input::placeholder {
    color: white;
    opacity: 75%;
}
</style>