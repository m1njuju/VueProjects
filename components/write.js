

Vue.component('write-component',{
    data: function() {
        return {
            dialog:false,
            iconIndex: 0,
            message_todo: '',
            message_meal: '',
        }
    },
    created () {
        EventBus.$on('click', () => {
            this.dialog=true;
        });
    },
    methods: {
        saveMessage () {
            this.iconIndex = 0
        },
    },
    template:`
    <div>
    <!--일기 작성란 -->
    <v-container fluid>
        <v-dialog v-model="dialog" max-width="800px">
        <v-card >

        <v-row>
            <v-col cols="4">
                <v-img 
                :src="'https://picsum.photos/500/300?image'"
                :lazy-src="'https://picsum.photos/10/6?image='+n * 15"
                aspect-ratio="1"
                class="grey lighten-2 .float-left ml-5 mt-5"
                max-width="200px"
                @click=""
                >

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
            </v-col>

            <v-col cols="8">
                <!--날짜 입력 -->
                <v-card-text><input type="date"></v-card-text>

                <!-- 기분 선택칸 -->
                <v-card-text>
                    오늘의 기분
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
                        </v-col>
                    </v-row>
            
                    <v-divider class="mx-4"></v-divider>

                    <!-- 긴 문장 작성 칸 -->
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                            outlined
                            label="오늘의 하루를 기록하세요"
                            auto-grow
                            ></v-textarea>
                        </v-col>
                    </v-row>

        <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn justify-center>완료</v-btn>
        </v-card-actions>
    </v-card>
        </v-dialog>
        
    </v-container>
    </div>
    `
})