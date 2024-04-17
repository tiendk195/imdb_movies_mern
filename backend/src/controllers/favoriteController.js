import favoriteModels from "../models/favoriteModels";

export const addFovorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModels.findOne({
      user: req.user._id,

      mediaId: req.body.mediaId,
    });
    if (isFavorite) {
      res.status(400).json({
        success: false,
        message: "Already added to favorite",
      });
    } else {
      const favorite = await favoriteModels.create({
        user: req.user._id,
        mediaId: req.body.mediaId,
        mediaType: req.body.mediaType,
        mediaTitle: req.body.mediaTitle,
        mediaPoster: req.body.mediaPoster,
      });
      res.status(200).json({
        success: true,
        message: "Added to favorite",
        favorite,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const removeFavorite = async (req, res) => {
  try {
    const favorite = await favoriteModels.findOneAndDelete({
      user: req.user._id,
      mediaId: req.body.mediaId,
    });
    res.status(200).json({
      success: true,
      message: "Removed from favorite",
      favorite,
    });
    if (!favorite) {
      res.status(400).json({
        success: false,
        message: "Already removed from favorite",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getFavorite = async (req, res) => {
  try {
    const favorite = await favoriteModels
      .find({ user: req.user._id })
      .populate("mediaType");
    res.status(200).json({
      success: true,
      favorite,
    });
    if (!favorite) {
      res.status(400).json({
        success: false,
        message: "No favorite found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
