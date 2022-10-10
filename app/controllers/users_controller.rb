class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = find_user
        render json: user 
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user 
    end

    def destroy
        user = find_user
        user.destroy
        render json: user
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:firstname, :lastname, :email, :password_digest)
    end
end
