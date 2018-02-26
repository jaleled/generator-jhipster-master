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
package <%=packageName%>.security.oauth2;

import org.springframework.boot.autoconfigure.security.oauth2.resource.AuthoritiesExtractor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

public class SimpleAuthoritiesExtractor implements AuthoritiesExtractor {

    private final String oauth2AuthoritiesAttribute;

    public SimpleAuthoritiesExtractor(String oauth2AuthoritiesAttribute) {
        this.oauth2AuthoritiesAttribute = oauth2AuthoritiesAttribute;
    }

    @Override
    public List<GrantedAuthority> extractAuthorities(Map<String, Object> map) {
        return Optional.ofNullable((List<String>) map.get(oauth2AuthoritiesAttribute))
            .filter(it -> !it.isEmpty())
            .orElse(Collections.emptyList())
            .stream()
            .map(SimpleGrantedAuthority::new)
            .collect(toList());
    }
}
