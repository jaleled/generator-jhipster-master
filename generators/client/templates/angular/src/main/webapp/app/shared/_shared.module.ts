<%#
 Copyright 2013-2018 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see http://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-%>
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    <%=angularXAppName%>SharedLibsModule,
    <%=angularXAppName%>SharedCommonModule,
    <%_ if (authenticationType !== 'oauth2') { _%>
    <%=jhiPrefixCapitalized%>LoginModalComponent,
    <%_ } _%>
    HasAnyAuthorityDirective,
    <%_ if (enableSocialSignIn) { _%>
    <%=jhiPrefixCapitalized%>SocialComponent
    <%_ } _%>
} from './';

@NgModule({
    imports: [
        <%=angularXAppName%>SharedLibsModule,
        <%=angularXAppName%>SharedCommonModule
    ],
    declarations: [
        <%_ if (enableSocialSignIn) { _%>
        <%=jhiPrefixCapitalized%>SocialComponent,
        <%_ } _%>
        <%_ if (authenticationType !== 'oauth2') { _%>
        <%=jhiPrefixCapitalized%>LoginModalComponent,
        <%_ } _%>
        HasAnyAuthorityDirective
    ],
    providers: [],
    <%_ if (authenticationType !== 'oauth2') { _%>
    entryComponents: [<%=jhiPrefixCapitalized%>LoginModalComponent],
    <%_ } _%>
    exports: [
        <%=angularXAppName%>SharedCommonModule,
        <%_ if (enableSocialSignIn) { _%>
        <%=jhiPrefixCapitalized%>SocialComponent,
        <%_ } _%>
        <%_ if (authenticationType !== 'oauth2') { _%>
        <%=jhiPrefixCapitalized%>LoginModalComponent,
        <%_ } _%>
        HasAnyAuthorityDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class <%=angularXAppName%>SharedModule {}
