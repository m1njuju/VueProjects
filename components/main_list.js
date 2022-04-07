Vue.component('main-list',{
    data: function() {
        return {
            show: true,
            dialog:false,
            iconIndex: 0,
            message_todo: '',
            message_meal: '',
        }
    },
    created () {
        EventBus.$on('toggle', () => {
            this.show=!this.show;
        });
    },
    methods: {
        addWrite () {
            this.dialog=true;
            EventBus.$emit('click');
        },
        saveMessage () {
            this.iconIndex = 0
        },
    },
    template:`
    <div>
        <!-- 갤러리 형식으로 정렬 -->
        <v-container v-if="show">
            <v-row>
                <v-col 
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="6"
                sm="3"
                >
                    <button @click="addWrite">
                        <v-img :src="'https://picsum.photos/500?image='+n*10" max-width="200px">
                            <!--이미지 로딩 진행 써클 -->
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                    <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </button>
                </v-col>
            </v-row>
        </v-container>


<!--리스트 형식으로 정렬-->
    <v-container v-else>
    <button style="width: 100%;" @click="addWrite">
    <v-card >
    <v-list v-for="n in 9" :key="n">
        <v-list-item>
        <v-img 
        :src="'https://picsum.photos/500/300?image'+n*10"
        aspect-ratio="1"
        class=" .float-left ml-5 mt-5"
        max-width="180px">

            <!--이미지 로딩 진행 써클 -->
            <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                    </v-row>
            </template>
        </v-img>
        
            

            <v-list-item-content>
                <v-card-text>오늘의 기분
                    <v-row justify="space-around">
                        <v-col
                        cols="12"
                        sm="10"
                        md="8"
                        >
                            <v-chip-group
                            mandatory
                            active-class="pink--text"
                            >
                                <v-chip
                                v-for="tag in tags"
                                :key="tag"
                                >
                                    <v-icon>
                                        {{ tag }}
                                    </v-icon>
                                    </v-chip>
                                </v-chip-group>
                            </v-col>
                        </v-row>
                </v-card-text>

                <v-card-text>
                                        <v-form>
                                            <v-row>
                                                <v-col cols="12">
                                                  <v-text-field
                                                    v-model="message_todo"
                                                    :append-outer-icon="'mdi-check'"
                                                    clear-icon="mdi-close-circle"
                                                    clearable
                                                    label="오늘의 할 일"
                                                    type="text"
                                                    @click:append-outer="saveMessage"
                                                  ></v-text-field>
                                                </v-col>
                                            </v-row>
                                    </v-card-text>
                                    
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="12">
                                              <v-text-field
                                                v-model="message_meal"
                                                :append-outer-icon="'mdi-check'"
                                                clear-icon="mdi-close-circle"
                                                clearable
                                                label="오늘의 식사"
                                                type="text"
                                                @click:append-outer="saveMessage"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                            </v-card-text>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </button>
    </v-container>
</div>
    `
})