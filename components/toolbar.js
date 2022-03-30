Vue.component('toolbar-component',{
    template:`
    <!-- 상단 툴바 -->
            <v-app-bar app >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>오늘의 일기</v-toolbar-title>

                
                <v-spacer></v-spacer>

                <!-- 날짜 선택으로 검색할 수 있게 -->
                <v-btn icon>
                    <v-icon>mdi-calendar-month-outline</v-icon>
                </v-btn>

                <!--사진만 보일 시 나타날 아이콘-->
                <v-btn icon>
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>

                <!-- 리스트가 보일 시 나타날 아이콘-->
                <v-btn icon>
                    <v-icon>mdi-apps</v-icon>
                </v-btn>
            
                <!-- 버튼 클릭 시 일기 작성 칸 나오게-->
                <v-btn icon>
                    <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
            </v-app-bar>
    `
})