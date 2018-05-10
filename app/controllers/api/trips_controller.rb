class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:update]

  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    trip.user_id = current_user.id
    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors }, status: 422
    end
  end

  def update
    if @trip.update(trip_params)
      render json: @trip
    else  
      render json: { errors: @trip.errors }, status: 422
    end
  end

  def destroy
    Trip.find(params[:id]).destroy
    render json: { message: 'Trip Deleted' }
  end

  private

    def trip_params
      params.require(:trip).permit(:duration, :count, :longitude, :latitude)
    end

    def set_trip
      @trip = Trip.find(params[:id])
    end
end
