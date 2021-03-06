//  Copyright © 2019 650 Industries. All rights reserved.

#import <React/RCTBridge.h>

NS_ASSUME_NONNULL_BEGIN

@interface EXUpdatesUtils : NSObject

+ (void)runBlockOnMainThread:(void (^)(void))block;
+ (NSString *)sha256WithData:(NSData *)data;
+ (nullable NSURL *)initializeUpdatesDirectoryWithError:(NSError ** _Nullable)error;
+ (void)sendEventToBridge:(nullable RCTBridge *)bridge withType:(NSString *)eventType body:(NSDictionary *)body;
+ (BOOL)shouldCheckForUpdate;

@end

NS_ASSUME_NONNULL_END
