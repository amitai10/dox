# app/controllers/document_controller.rb
class DocumentsController < ApplicationController

  def index
  end

  def docs
    render json: Document.all
  end

  def show
    render json: Document.find(params[:id])
  end

  def create
    render json: Document.create!(title: params[:title])
  end

  def edit
    doc = Document.find(params[:id])
    doc.update!(body: params[:body]);
    ActionCable.server.broadcast 'documents',
        document: doc.body
      head :ok
  end
end
