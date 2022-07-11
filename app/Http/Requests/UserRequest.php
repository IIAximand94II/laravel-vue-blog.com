<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'login'=>'required|unique:user|min:3|max:32',
            'email'=>'required|email|unique:email|min:5|max:64',
            'name'=>'required|string|min:3',
            'password'=>'required|min:8|max:64|confirmed',
            'password_confirmation'=>'required|min:8|max:64',
        ];
    }
}
