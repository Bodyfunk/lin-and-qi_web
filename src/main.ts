import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/style.less'
import router from "./router";
import { createPinia } from 'pinia';
import service from "./utils/https";
import urls from "./utils/urls";
import {
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElMessage,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElLoading,
    ElTimeline,
    ElTimelineItem,
    ElCard,
    ElTag,
    ElIcon,
    ElCollapseTransition,
    ElImage,
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElDescriptions,
    ElDescriptionsItem
} from 'element-plus';

const app = createApp(App)

app.component(ElButton.name, ElButton);
app.component(ElDialog.name, ElDialog);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);
app.component(ElMessage.name, ElMessage);
app.component(ElMenu.name, ElMenu);
app.component(ElMenuItem.name, ElMenuItem);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElTimeline.name, ElTimeline);
app.component(ElTimelineItem.name, ElTimelineItem);
app.component(ElDropdownItem.name, ElDropdownItem);
app.component(ElDropdown.name, ElDropdown);
app.component(ElCard.name, ElCard);
app.component(ElTag.name, ElTag);
app.component(ElIcon.name, ElIcon);
app.component(ElCollapseTransition.name, ElCollapseTransition);
app.component(ElImage.name, ElImage);
app.component(ElContainer.name, ElContainer);
app.component(ElHeader.name, ElHeader);
app.component(ElMain.name, ElMain);
app.component(ElAside.name, ElAside);
app.component(ElDescriptions.name, ElDescriptions);
app.component(ElDescriptionsItem.name, ElDescriptionsItem);

app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$loading = ElLoading.service;
// app.config.globalProperties.productionTip = false;
app.config.globalProperties.$https = service;
app.config.globalProperties.$urls = urls;

app.use(router)
app.use(createPinia());
app.mount('#app')
