# app/controllers/document_controller.rb
class DocumentsController < ApplicationController

  def index
    # render json: Document.all
  end

  def show
    render json: Document.find(params[:id])
  end

  def create
    render json: Document.create!(doc_params)
  end

  private

    def doc_params
      params.require(:document).permit(:title)
    end
end
