package com.example.demo.Mapper;

import com.example.demo.dto.CourseDto;
import com.example.demo.Model.Course;

public class CourseMapper {

    public static CourseDto mapToCourseDto(Course course) {
        return new CourseDto(
                course.getId(),
                course.getName(),
                course.getDuration(),
                course.getFee());
    }

    public static Course mapToCourse(CourseDto courseDto) {
        return new Course(
                courseDto.getId(),
                courseDto.getName(),
                courseDto.getDuration(),
                courseDto.getFee());
    }
}