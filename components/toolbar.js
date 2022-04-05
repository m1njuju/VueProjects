Vue.component('toolbar-component',{
    data: function(){
        return {
            ndrawer: false,
            items: [
                { title: '설정' },
                { title: '로그인' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            menuList: [
                {
                    title : '내 정보',
                    icon : 'mdi-information-outline',
                },
                {
                    title : '설정',
                    icon : 'mdi-cog-outline',
                },
                {
                    title : '커뮤니티',
                    icon : 'mdi-comment-processing-outline',
                }
            ],
            focus: '',
            type: 'month',
            closeOnContentClick: false,
            toggle:true,
            dialog:false,
            show:false,
        }
    },
    computed: {
        title: function(){ return this.$refs.calendar.title}
    },
    mounted () {
        this.$refs.calendar.checkChange()
    },
    methods: {
        setToday () {
            this.focus = ''
        },
        prev () {
            this.$refs.calendar.prev()
        },
        next () {
            this.$refs.calendar.next()
        },
        addWrite () {
            this.dialog=true;
            EventBus.$emit('click');
        },
        
        toggleShow () {
            this.show = !this.show;
            this.toggle= !this.toggle;
            EventBus.$emit('toggle')
        }
    },
    
    template:`
    <div>
    <!-- 상단 툴바 -->
            <v-app-bar app color="info lighten-2" dark>
                <v-app-bar-nav-icon @click="ndrawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title >오늘의 프레임</v-toolbar-title>

                <v-spacer></v-spacer>


                <!-- 날짜 선택으로 검색할 수 있게 -->

                <v-menu bottom left :close-on-content-click="closeOnContentClick"
                class="position:relative;overflow-x:hidden;">
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="$refs.calendar"
                    >
                        <v-icon>mdi-calendar-month-outline</v-icon>
                    </v-btn>
                    </template>

                    <!-- 캘린더 부분 -->
                    <div>
                        <v-sheet>
                            <v-toolbar flat>
                                <v-btn outlined class="mr-4"
                                color="info lighten-2" @click="setToday">Today</v-btn>

                                <v-btn fab text small
                                color="info lighten-2" @click="prev">
                                        <v-icon> mdi-chevron-left </v-icon>
                                </v-btn>

                                <v-btn fab text small
                                color="info lighten-2" @click="next">
                                    <v-icon> mdi-chevron-right </v-icon>
                                </v-btn>
                                            
                                <v-toolbar-title v-if="$refs.calendar">
                                    {{ $refs.calendar.title }}
                                </v-toolbar-title>
                            </v-toolbar>
                        </v-sheet>
                                
                        <v-sheet width="300">
                            <v-calendar
                            ref="calendar"
                            v-model="focus"
                            color="info lighten-2"
                            :type="type"
                            ></v-calendar>
                        </v-sheet>
                            
                    </div>
                    <!-- 캘린더 끝 -->
                </v-menu>

                <!--사진만 보일 시 나타날 아이콘-->
                <v-btn icon @click="toggleShow" v-show="!toggle">
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>

                <!-- 리스트가 보일 시 나타날 아이콘-->
                <v-btn icon @click="toggleShow" v-if="toggle">
                    <v-icon>mdi-apps</v-icon>
                </v-btn>
            

                <!-- 버튼 클릭 시 일기 작성 칸 나오게-->
                <v-btn icon @click="addWrite" >
                    <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>



                <!-- 설정 버튼 -->
                <v-menu
                bottom
                left
                >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </template>

                <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
            </v-app-bar>

            

            <!--내비게이션 서랍 시작 -->
            <v-navigation-drawer absolute temporary v-model="ndrawer">
                <v-toolbar flat>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon class="grey white--text">mdi-account</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title> 닉네임 </v-list-item-title>
                                <v-list-item-subtitle> 아이디 </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-toolbar>

                <v-divider></v-divider>
                <!-- 내비게이션 서랍 메뉴 리스트 -->
                <v-list>
                    <v-list-item @click="" v-for="menu in menuList">
                        <v-list-item-action>
                            <v-icon>{{menu.icon}}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{menu.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
    </div>
    `
})