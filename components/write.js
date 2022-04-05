const EventBus = new Vue()

Vue.component('write-component',{
    data: function() {
        return {
            dialog:false,
        }
    },
    created () {
        EventBus.$on('click', () => {
            this.dialog=true;
        });
    },
    template:`
    <div>
    <!--일기 작성란 -->
    <v-container>
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
                    <div>오늘의 할 일   <input type="text" style="position: relative; left:60px;">
                        <v-card-actions>
                            <v-btn icon style="position: relative; left:60px;">
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div><br>
                    <div>오늘 먹은 것  <input type="text" style="position: relative; left:60px;"> 
                        <v-card-actions>
                            <v-btn icon style="position: relative; left:60px;">
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card-text>
            </v-col>
        </v-row>

        <v-divider class="mx-4"></v-divider>

        <!-- 긴 문장 작성 칸 -->
        <v-card-text>
            <div>
                <textarea style="resize:none;" cols="90" rows="20" placeholder="오늘의 일기를 작성해 주세요"></textarea>
            </div>
        </v-card-text>

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