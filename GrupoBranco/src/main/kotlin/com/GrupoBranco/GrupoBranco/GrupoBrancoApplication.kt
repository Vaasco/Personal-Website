package com.GrupoBranco.GrupoBranco

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.jdbi.v3.core.Jdbi
import org.postgresql.ds.PGSimpleDataSource

@SpringBootApplication
class GrupoBrancoApplication {

    @Bean
    fun jdbi(): Jdbi {
        val jdbcDbUrl = System.getenv("LOCALHOST_URL")
        val dataSrc = PGSimpleDataSource()
        dataSrc.setUrl(jdbcDbUrl)
        return Jdbi.create(dataSrc)
    }
}

fun main(args: Array<String>) {
    runApplication<GrupoBrancoApplication>(*args)
}
