import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('logs')
export class LogsController {
    @Get()
    findAll(): string {
        return 'This action returns all logs';
    }

    @Get()
    findSomeThing(@Query('something') something: string): string {
        return `This action returns logs with something: ${something}`;
    }
    
    @Get(':id')
    findOne(@Param('id') id: string): string { 
        return 'This action returns a specific log';
    }

    @Post()
    create(@Body() log: {}): {} {
        return log;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() log: {}): {} {
        return log;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} log`;
    }
}
