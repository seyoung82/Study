import React from 'react'
import { api } from "./api";
export class TestApi{
    static async getTests(){
        const tests = await api.get('/tests');
        return tests.data.success ? tests.data.data : [];
    }

    static async getTestById(id){
        const test = await api.get(`/tests/${id}`);
        return test.data.data.success ? test.data.data : {};
    }

    static async updateTest({id,title,data}){
        const updateTest = await api.patch("/tests",{
            id,
            title,
        });
        return updateTest.data.success ? updateTest.data.data : {};
    }

    static async deleteTest(id){
        const result = await api.delete(`/tests/${id}`);
        return result.data.success;
    }
}