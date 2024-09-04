<template>
    <div class="flex flex-col px-20 bg-black text-white py-10">
        <div class="flex w-full gap-14">
            <!-- first section -->
            <div class="flex flex-col w-8/12">
                <p class="flex justify-start items-center mb-4">Top Auction</p>
                <div class=" h-auto bg-slate-600 flex p-4 rounded-lg">
                    <div class="mr-4">
                        <img src="/public/Mask group.png" alt="image" class="w-full h-auto rounded-lg">
                    </div>
                    <div class="flex flex-col ">
                        <div class="flex ">
                            <p class="text-xl font-semibold ">Magic Bullets</p>
                            <img src="/public/Vector.png" alt="love" class="mx-auto">
                        </div>

                        <div class="flex justify-start items-center ">
                            <img src="/public/Ellipse 34.png" alt="tof" class=" w-10 h-10 rounded-full">
                            <div>
                                <p class="font-medium">Isaac Asante Asare</p>
                                <span class="text-sm text-gray-400">@obrempong77</span>
                            </div>
                        </div>
                        <div class="flex justify-between ">
                            <p class="">Price per NFT</p>
                            <p>Starts in</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="/public/Group 5218.png" alt="logo" class=" w-5 h-5">
                                <p class="font-semibold">80 PLAYR</p>
                            </div>
                            <p class="text-sm text-gray-400">02h 32m 44s</p>
                        </div>
                        <div class="flex gap-4">
                            <button class="px-6 py-3 text-black bg-slate-400">
                                View Rewards
                            </button>
                            <button class="px-6 py-3 bg-transparent border-2">
                                View Rewards
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- second section -->
            <div class="w-4/12 ">
                <p class="mb-4">My Wallet</p>
                <div class="border border-white">
                    <div
                        class="flex flex-col h-auto bg-black text-white  justify-center items-center p-4 rounded-lg mb-8">
                        <p class="text-sm">Your Balance</p>
                        <p><span>ETH</span> 21.533.10</p>
                    </div>
                    <div class="relative px-14">
                        <!-- Input Field with Icon -->
                        <div class="relative px-14">
                            <!-- Input Field with Icon -->
                            <div
                                class="relative flex items-center border border-gray-300 rounded-lg bg-black text-white">
                                <!-- Icon inside input field -->
                                <img src="/public/Group 5218.png" alt="icon" class="w-6 h-6 absolute left-3" />

                                <!-- Display Text with Different Styles -->
                                <div class="w-full pl-12 py-2 cursor-pointer flex items-center"
                                    @click="isOpen = !isOpen">
                                    <span class="text-lg font-medium text-gray-300">{{ ethereumText }}</span>
                                    <span class="text-md font-semibold text-blue-500 ml-2">{{ ethText }}</span>

                                    <!-- Arrow Icon indicating dropdown -->
                                    <svg class="w-5 h-5 ml-4 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Dropdown Menu -->
                            <div v-if="isOpen"
                                class="absolute mt-1 w-full bg-black border border-gray-300 rounded-lg shadow-lg z-10">
                                <div class="max-h-60 overflow-y-auto">
                                    <div v-for="option in filteredOptions" :key="option.value">
                                        <p @click="selectOption(option)"
                                            class="px-4 py-2 cursor-pointer hover:bg-gray-900 text-white">
                                            {{ option.label }}
                                        </p>
                                    </div>
                                    <p v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-500">No options
                                        found
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="flex justify-center gap-20 ">
                        <div class="flex ">
                            <img src="/public/Icon.png" alt="green" class="mx-auto">
                            <p class="flex justify-center items-center">Earnings</p>
                        </div>

                        <div class="flex ">
                            <img src="/public/Icon (1).png" alt="green" class="mx-auto">
                            <p class="flex justify-center items-center">Spendings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-row gap-9">
    <!-- Featured NFTs Section -->
    <div class="flex flex-col w-8/12">
        <p class="text-xl font-semibold mb-4">Featured NFTs</p>
        <div class="flex flex-row gap-14">
            <!-- NFT Card 1 -->
            <div class="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                <img src="/public/Rectangle 39884.png" alt="NFT Image" class="w-full h-auto mb-4">
                <div class="flex justify-between items-center mb-2">
                    <p class="font-semibold">Ready Players</p>
                    <img src="/public/Vector (1).png" alt="Vector Icon" class="w-4 h-4">
                </div>
                <div class="flex items-center gap-2 mb-2">
                    <img src="/public/Ellipse 34 (1).png" alt="User Avatar" class="w-10 h-10 rounded-full">
                    <p class="text-sm">@obrempong77</p>
                </div>
                <div class="flex justify-between mb-4">
                    <p>Last Bid</p>
                    <p class="font-semibold">1.57 ETH</p>
                </div>
                <button class="w-full py-2 bg-slate-700 text-white rounded-lg">Place a bid</button>
            </div>

            <!-- NFT Card 2 -->
            <div class="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                <!-- Content for Card 2 -->
            </div>

            <!-- NFT Card 3 -->
            <div class="flex flex-col w-[241px] h-[383px] border border-gray-300 px-6 py-5 rounded-lg">
                <!-- Content for Card 3 -->
            </div>
        </div>
    </div>

    <!-- Recent Transactions Section -->
    <div class="flex flex-col w-4/12 ">
        <p class="text-xl font-semibold mb-4">Recent Transactions</p>
        <div class="flex flex-col gap-6 border px-5">
            <!-- Content for Recent Transactions -->
            <div class="flex flex-row justify-between w-full">
                <div class="flex items-center gap-4 ">
                    <img src="/public/Frame 44.png" alt="BTC Icon" class="w-10 h-10">
                    <div class="flex flex-col">
                        <p>0.15 BTC</p>
                        <span class="text-gray-500">$16,533.10</span>
                    </div>
                </div>
                <p class="text-red-500 justify-center items-center flex">- $60</p>
            </div>

            <div class="flex flex-row justify-between w-full border-t">
                <div class="flex items-center gap-4 ">
                    <img src="/public/Frame 44.png" alt="BTC Icon" class="w-10 h-10">
                    <div class="flex flex-col">
                        <p>0.15 BTC</p>
                        <span class="text-gray-500">$16,533.10</span>
                    </div>
                </div>
                <p class="text-red-500 justify-center items-center flex">- $60</p>
            </div>

            <div class="flex flex-row justify-between w-full border-t">
                <div class="flex items-center gap-4 ">
                    <img src="/public/Frame 44.png" alt="BTC Icon" class="w-10 h-10">
                    <div class="flex flex-col">
                        <p>0.15 BTC</p>
                        <span class="text-gray-500">$16,533.10</span>
                    </div>
                </div>
                <p class="text-red-500 justify-center items-center flex">- $60</p>
            </div>

            <div class="flex flex-row justify-between w-full border-t">
                <div class="flex items-center gap-4 ">
                    <img src="/public/Frame 44.png" alt="BTC Icon" class="w-10 h-10">
                    <div class="flex flex-col">
                        <p>0.15 BTC</p>
                        <span class="text-gray-500">$16,533.10</span>
                    </div>
                </div>
                <p class="text-red-500 justify-center items-center flex">- $60</p>
            </div>

            <div class="flex flex-row justify-between w-full border-t">
                <div class="flex items-center gap-4 ">
                    <img src="/public/Frame 44.png" alt="BTC Icon" class="w-10 h-10">
                    <div class="flex flex-col">
                        <p>0.15 BTC</p>
                        <span class="text-gray-500">$16,533.10</span>
                    </div>
                </div>
                <p class="text-red-500 justify-center items-center flex">- $60</p>
            </div>
            <!-- Add more transactions as needed -->
        </div>
    </div>
</div>


    </div>
</template>


<script>
export default {
    data() {
        return {
            isOpen: false,
            searchQuery: "",
            ethereumText: "Ethereum",  // Text for the first part
            ethText: "ETH",
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
                { value: 'option4', label: 'Option 4' },
                // Add more options as needed
            ],
        };
    },
    computed: {
        filteredOptions() {
            const query = this.searchQuery.toLowerCase();
            return this.options.filter(option =>
                option.label.toLowerCase().includes(query)
            );
        },
    },
    methods: {
        closeDropdown(event) {
            setTimeout(() => {
                if (!this.$el.contains(event.relatedTarget)) {
                    this.isOpen = false;
                }
            }, 200);
        },
        selectOption(option) {
            this.displayText = option.label;
            this.isOpen = false;
        },
    },
};
</script>
