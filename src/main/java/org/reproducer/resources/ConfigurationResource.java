package org.reproducer.resources;

import io.quarkus.runtime.annotations.StaticInitSafe;
import io.smallrye.config.ConfigMapping;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import java.util.Map;

@Path( "/config" )
public class ConfigurationResource {

    private final Map<String, String> properties;

    @Inject
    public ConfigurationResource(DlpConfig config) {
        this.properties = config.properties();
    }

    @Consumes( MediaType.APPLICATION_JSON )
    @Path( "/properties" )
    @GET
    public Map<String, String> properties() {
        return this.properties;
    }


    @StaticInitSafe
    @ConfigMapping( prefix = "config" )
    public interface DlpConfig {
        Map<String, String> properties();
    }
}
