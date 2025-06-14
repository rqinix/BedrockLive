declare global {
  // TikTok related types
  interface TikTokLiveServerConfig {
    tiktokUsername: string;
    port?: number;
    waitUntilLive?: boolean;
    enableGiftInfo?: boolean;
    maxReconnectAttempts?: number;
  }

  interface PluginModule {
    manifest: PluginManifest;
    mainFile: string;
  }

  interface PluginManifest {
    name: string;
    description: string;
    version: string;
    author: string;
  }

  // Minecraft related types
  type MinecraftEvent =
    | "AdditionalContentLoaded"
    | "AgentCommand"
    | "AgentCreated"
    | "ApiInit"
    | "AppPaused"
    | "AppResumed"
    | "AppSuspended"
    | "AwardAchievement"
    | "BlockBroken"
    | "BlockPlaced"
    | "BoardTextUpdated"
    | "BossKilled"
    | "CameraUsed"
    | "CauldronUsed"
    | "ChunkChanged"
    | "ChunkLoaded"
    | "ChunkUnloaded"
    | "ConfigurationChanged"
    | "ConnectionFailed"
    | "CraftingSessionCompleted"
    | "EndOfDay"
    | "EntitySpawned"
    | "FileTransmissionCancelled"
    | "FileTransmissionCompleted"
    | "FileTransmissionStarted"
    | "FirstTimeClientOpen"
    | "FocusGained"
    | "FocusLost"
    | "GameSessionComplete"
    | "GameSessionStart"
    | "HardwareInfo"
    | "HasNewContent"
    | "ItemAcquired"
    | "ItemCrafted"
    | "ItemDestroyed"
    | "ItemDropped"
    | "ItemEnchanted"
    | "ItemSmelted"
    | "ItemUsed"
    | "JoinCanceled"
    | "JukeboxUsed"
    | "LicenseCensus"
    | "MascotCreated"
    | "MenuShown"
    | "MobInteracted"
    | "MobKilled"
    | "MultiplayerConnectionStateChanged"
    | "MultiplayerRoundEnd"
    | "MultiplayerRoundStart"
    | "NpcPropertiesUpdated"
    | "OptionsUpdated"
    | "performanceMetrics"
    | "PackImportStage"
    | "PlayerBounced"
    | "PlayerDied"
    | "PlayerJoin"
    | "PlayerLeave"
    | "PlayerMessage"
    | "PlayerTeleported"
    | "PlayerTransform"
    | "PlayerTravelled"
    | "PortalBuilt"
    | "PortalUsed"
    | "PortfolioExported"
    | "PotionBrewed"
    | "PurchaseAttempt"
    | "PurchaseResolved"
    | "RegionalPopup"
    | "RespondedToAcceptContent"
    | "ScreenChanged"
    | "ScreenHeartbeat"
    | "SignInToEdu"
    | "SignInToXboxLive"
    | "SignOutOfXboxLive"
    | "SpecialMobBuilt"
    | "StartClient"
    | "StartWorld"
    | "TextToSpeechToggled"
    | "UgcDownloadCompleted"
    | "UgcDownloadStarted"
    | "UploadSkin"
    | "VehicleExited"
    | "WorldExported"
    | "WorldFilesListed"
    | "WorldGenerated"
    | "WorldLoaded"
    | "WorldUnloaded";
}

export {};
